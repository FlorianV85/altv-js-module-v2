#pragma once

#include "v8-persistent-handle.h"
#include "Convert.h"

namespace js
{
    template<typename T>
    using Persistent = v8::Persistent<T, v8::CopyablePersistentTraits<T>>;

    class Object
    {
        v8::Local<v8::Context> context;
        v8::Local<v8::Object> object;

    public:
        Object() : object(v8::Object::New(v8::Isolate::GetCurrent())), context(v8::Isolate::GetCurrent()->GetEnteredOrMicrotaskContext()) {}
        Object(v8::Local<v8::Object> _object) : object(_object), context(v8::Isolate::GetCurrent()->GetEnteredOrMicrotaskContext()) {}
        Object(const std::initializer_list<std::pair<std::string, v8::Local<v8::Value>>>& list) : context(v8::Isolate::GetCurrent()->GetEnteredOrMicrotaskContext())
        {
            object = v8::Object::New(v8::Isolate::GetCurrent());
            for(auto& val : list)
            {
                Set(val.first, val.second);
            }
        }

        v8::Local<v8::Object> Get() const
        {
            return object;
        }

        template<typename T>
        void Set(const std::string& key, const T& val)
        {
            object->Set(context, js::JSValue(key), js::JSValue(val));
        }

        template<typename T>
        T Get(const std::string& key) const
        {
            return js::CppValue<T>(object->Get(context, js::JSValue(key)).ToLocalChecked()).value();
        }
    };

    class Array
    {
        v8::Local<v8::Context> context;
        v8::Local<v8::Array> array;
        int currentIdx = 0;

    public:
        Array() : array(v8::Array::New(v8::Isolate::GetCurrent())), context(v8::Isolate::GetCurrent()->GetEnteredOrMicrotaskContext()) {}
        Array(int size) : array(v8::Array::New(v8::Isolate::GetCurrent(), size)), context(v8::Isolate::GetCurrent()->GetEnteredOrMicrotaskContext()) {}
        Array(v8::Local<v8::Array> _array) : array(_array), context(v8::Isolate::GetCurrent()->GetEnteredOrMicrotaskContext()) {}
        Array(const std::initializer_list<v8::Local<v8::Value>>& list) : context(v8::Isolate::GetCurrent()->GetEnteredOrMicrotaskContext())
        {
            array = v8::Array::New(v8::Isolate::GetCurrent(), list.size());
            int i = 0;
            for(auto& val : list) Push(val);
        }

        v8::Local<v8::Array> Get() const
        {
            return array;
        }

        template<typename T>
        void Push(const T& val)
        {
            array->Set(context, currentIdx++, js::JSValue(val));
        }

        template<typename T>
        void Set(int index, const T& val)
        {
            array->Set(context, index, js::JSValue(val));
        }
    };
}  // namespace js
