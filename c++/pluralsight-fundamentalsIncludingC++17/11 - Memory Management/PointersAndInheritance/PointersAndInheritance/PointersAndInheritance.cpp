// PointersAndInheritance.cpp : Defines the entry point for the console application.
//

#include "Person.h"
#include "Tweeter.h"
#include <iostream>

using std::cout;
using std::endl;

int main()
{
	Person Kate ("Kate", "Gregory",456);
	Person & rKate = Kate;
	Person* pKate = &Kate;

	Tweeter KateGregcons ("Kate","Gregory",567,"@gregcons");
	Person* pKateGregcons = &KateGregcons;
	Person& rpKateGregcons = KateGregcons;
	Tweeter& rtKateGregcons = KateGregcons;

	cout << rKate.GetName() << endl;
	cout << pKate->GetName() << endl;
	cout << KateGregcons.GetName() << endl;
	cout << rpKateGregcons.GetName() << endl;
	cout << rtKateGregcons.GetName() << endl;
	cout << pKateGregcons->GetName() << endl;

	Person* Someone = new Tweeter("Someone", "Else", 567, "@someone");
	cout << Someone->GetName() << endl;
	delete Someone;



}

