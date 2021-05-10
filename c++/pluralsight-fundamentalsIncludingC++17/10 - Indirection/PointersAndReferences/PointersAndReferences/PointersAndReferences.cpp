// PointersAndReferences.cpp : Defines the entry point for the console application.
//

#include <string>
using std::string;
#include <iostream>
using std::cout;
using std::endl;

#include "Person.h"


int main()
{
	int a = 3;
	cout << "a is " << a << endl;
	int& rA = a;
	rA = 5;
	cout << "a is " << a << endl;

	Person Kate("Kate", "Gregory", 234);
	Person& rKate = Kate;
	rKate.SetNumber(345);
	cout << "rKate: " << rKate.GetName() << " " << rKate.GetNumber() << endl;

	//int& badReference;
	//badReference = 3;
	//cout << badReference;


	int* pA = &a;
	*pA = 4;
	cout << "a is " << a << endl;
	int b = 100;
	pA = &b;
	(*pA)++;
	cout << "a " << a << ", *pA " << *pA << endl; 

	Person* pKate = &Kate;
	(*pKate).SetNumber(235);
	pKate->SetNumber(236);
	cout << "Kate: " << Kate.GetName() << " " << Kate.GetNumber() << endl;
	cout << "pKate: " << pKate->GetName() << " " << pKate->GetNumber() << endl;



	int* badPointer=nullptr;
	if (badPointer)
	{
		*badPointer = 3;
		cout << *badPointer << endl;
	}


	return 0;
}

