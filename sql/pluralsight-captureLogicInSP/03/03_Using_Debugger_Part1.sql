USE [ABCCompany];
GO

DECLARE @RandomNumber int;

SELECT @RandomNumber = FLOOR(RAND()*(30-1+1))+1;

EXECUTE Sales.GenerateRandomMessage @RandomNumber = @RandomNumber;
GO



-- Great article for more information on the debugger
-- https://docs.microsoft.com/en-us/sql/ssms/scripting/transact-sql-debugger?view=sql-server-2017