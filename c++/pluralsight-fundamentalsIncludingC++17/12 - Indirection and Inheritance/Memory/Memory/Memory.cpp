// Memory.cpp : Defines the entry point for the console application.
//

#include "Person.h"

int main()
{
	Person Kate("Kate", "Gregory", 345);
	Kate.AddResource();
	Kate.SetFirstName("Kate2");
	Kate.AddResource();
	Person Kate2 = Kate;
	return 0;
}

