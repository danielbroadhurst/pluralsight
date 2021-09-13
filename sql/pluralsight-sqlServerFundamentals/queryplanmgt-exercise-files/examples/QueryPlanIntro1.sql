select * from sys.dm_exec_cached_plans;

select * from sys.dm_exec_query_plan(0x06000D007852A00B40613C82000000000000000000000000);

select * from sys.dm_exec_sql_text(0x06000D007852A00B40613C82000000000000000000000000);

create function SqlAndPlan(@handle varbinary(max))
returns table
as
return select sql.text, cp.usecounts,cp.cacheobjtype,
cp.objtype, cp.size_in_bytes,
qp.query_plan
 from
 sys.dm_exec_sql_text(@handle) as sql cross join
 sys.dm_exec_query_plan(@handle)	as qp
 join sys.dm_exec_cached_plans as cp
 on cp.plan_handle = @handle;
 
 select * from SqlAndPlan(0x06000D007852A00B40613C82000000000000000000000000);
 
 
create view PlanCache
as
select sp.* from sys.dm_exec_cached_plans   as cp
cross apply SqlAndPlan(cp.plan_handle) as sp

select * from PlanCache

dbcc freeproccache

















































































































































































































