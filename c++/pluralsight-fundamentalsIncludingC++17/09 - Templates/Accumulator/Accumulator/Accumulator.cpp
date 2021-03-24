// Accumulator.cpp : Defines the entry point for the console application.
//

#include <string>
using std::string;
#include <iostream>
using std::cout;
using std::endl;
#include "Person.h"
#include "Accum.h"



int main()
{
	Accum<int> integers(0);
	integers += 3;
	integers += 7;
	cout << integers.GetTotal() << endl;

	Accum<string> strings("");
	strings += "hello";
	strings += " world";
	cout << strings.GetTotal() << endl;

	//integers += "testing";
	//strings += 4;

	//Person start("", "", 0);
	Accum<Person> people(0);
	Person p1("Kate", "Gregory", 123);
	Person p2("Someone", "Else", 456);
	people += p1;
	people += p2;
	cout << people.GetTotal() << endl;


	return 0;
}

