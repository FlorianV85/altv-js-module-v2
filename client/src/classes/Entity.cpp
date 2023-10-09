#include "Class.h"

// clang-format off
extern js::Class sharedEntityClass;
extern js::Class entityClass("Entity", &sharedEntityClass, nullptr, [](js::ClassTemplate& tpl)
{
    tpl.Property<&alt::IEntity::GetScriptID>("scriptID");
});
