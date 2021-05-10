// Memory.cpp : Defines the entry point for the console application.
//

#include "Person.h"
#include <string>
using std::string;

int Dummy(Person p) { return p.GetNumber(); }

int main()
{
	{
		Person Kate("Kate", "Gregory", 345);
		Kate.AddResource();
		string s1 = Kate.GetResourceName();
		Kate.AddResource();
		Person Kate2 = Kate;
		Kate = Kate2;
		int j = Dummy(Kate2);
	}
	return 0;
}

