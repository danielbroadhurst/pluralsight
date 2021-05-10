// ClassesAndObjects.cpp : Defines the entry point for the console application.
//

#include "Person.h"
#include "Tweeter.h"
#include "status.h"
#include <iostream>
using std::cout;
using std::endl;
using std::string;

int main()
{
	Person p1("Kate", "Gregory", 123);
	{
		Tweeter t1("Someone", "Else", 456, "@whoever");
		std::string name2 = t1.getName();
	}
	cout << "after innermost block" << endl;
	string name = p1.getName();

	//int i = p1.arbitrarynumber;

	Status s = Pending;
	s = Approved;

	FileError fe = FileError::notfound;
	fe = FileError::ok;
	NetworkError ne = NetworkError::disconnected;
	ne = NetworkError::ok;


	return 0;
}

