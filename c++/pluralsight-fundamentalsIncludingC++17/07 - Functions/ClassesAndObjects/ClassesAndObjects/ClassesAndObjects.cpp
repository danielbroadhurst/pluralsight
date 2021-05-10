// ClassesAndObjects.cpp : Defines the entry point for the console application.
//

#include "Person.h"
#include "Tweeter.h"
#include "status.h"
#include <iostream>

using std::cout;
using std::endl;

int main()
{
	Person p1("Kate", "Gregory", 123);
	{
	  	Tweeter t1("Someone", "Else", 456, "@whoever");
	}
	cout << "after innermost block" << endl;
	cout << "p1: " << p1.GetName() << " " << p1.GetNumber() << endl;
	p1.SetNumber(2);
	cout << "p1: " << p1.GetName() << " " << p1.GetNumber() << endl;

	return 0;
}

