// PointersAndInheritance.cpp : Defines the entry point for the console application.
//

#include "Person.h"
#include "Tweeter.h"
#include <iostream>
using std::cout;
using std::endl;
#include <memory>
using std::shared_ptr;
using std::make_shared;

int Dummy(Person const& p) { return p.GetNumber(); }

int main()
{
	Person Kate ("Kate", "Gregory",456);
	Person & rKate = Kate;
	Person* pKate = &Kate;

	Tweeter KateGregcons ("Twitter","User",567,"@gregcons");
	Person* pKateGregcons = &KateGregcons;
	Person& rpKateGregcons = KateGregcons;
	Tweeter& rtKateGregcons = KateGregcons;

	cout << rKate.GetName() << endl;
	cout << pKate->GetName() << endl;
	cout << KateGregcons.GetName() << endl;
	cout << rpKateGregcons.GetName() << endl;
	cout << rtKateGregcons.GetName() << endl;
	cout << pKateGregcons->GetName() << endl;

	//Person* Someone = new Tweeter("Someone", "Else", 567, "@someone");
	//cout << Someone->GetName() << endl;
	//delete Someone;

	shared_ptr<Person> spKate = make_shared<Tweeter>("Third", "Name", 678, "@handle");
	cout << spKate->GetName() << endl;

	//KateGregcons = Kate;

	Kate = KateGregcons;
	cout << Kate.GetName() << endl;

	int x;
	x = Dummy(Kate);
	x = Dummy(KateGregcons);




}

