"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[308],{25043:e=>{e.exports=JSON.parse('{"functions":[{"name":"onChange","desc":"Connects a function that will run whenever the observed is changed. Returns a function that disconnects the connection.\\n\\n```lua\\nlocal health = Hold(100, Vinum.AlwaysTrue)\\n\\nlocal healthObserver = Observe(health, Vinum.AlwaysTrue)\\n\\nhealthObserver:onChange(function(newValue)\\n\\tprint(newValue)\\nend)\\n```","params":[{"name":"funct","desc":"","lua_type":"(newValue: any) -> ()"}],"returns":[{"desc":"","lua_type":"() -> ()"}],"function_type":"method","source":{"line":44,"path":"src/Observe.luau"}},{"name":"onBind","desc":"Runs the function and then connect it, which makes it run every time the observed state is changed. Like onChange, it returns a \\nfunction that will disconnect the connection. \\n\\nInstead of:\\n```lua\\nlocal health = Hold(100, Vinum.AlwaysTrue)\\n\\nlocal healthObserver = Observe(health, Vinum.AlwaysTrue)\\n\\nHumanoid.Health = health:get()\\nhealthObserver:onChange(function(newValue)\\n\\tHumanoid.Health = newValue\\nend)\\n```\\n\\nIt is:\\n```lua\\nlocal health = Hold(100, Vinum.AlwaysTrue)\\n\\nlocal healthObserver = Observe(health, Vinum.AlwaysTrue)\\n\\nhealthObserver:onBind(function(newValue) \\n\\tHumanoid.Health = newValue\\nend)\\n```","params":[{"name":"funct","desc":"","lua_type":"(newValue: any) -> ()"}],"returns":[{"desc":"","lua_type":"() -> ()"}],"function_type":"method","source":{"line":82,"path":"src/Observe.luau"}}],"properties":[],"types":[],"name":"Observe","desc":"```lua\\nfunction Observe(\\n\\tstate, \\n\\tupdateProcessor: (newValue: any) -> (boolean) -- The function that Observe will use to determine whether to let updates pass or not\\n)\\n```\\n\\nConstructs a new Observe object, which is used for listening to changes on a state object.","source":{"line":16,"path":"src/Observe.luau"}}')}}]);