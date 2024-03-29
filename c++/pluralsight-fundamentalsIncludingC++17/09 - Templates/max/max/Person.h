#pragma once
#include <string>
class Person
{
private:
	std::string firstname;
	std::string lastname;
	int arbitrarynumber;

public:
	Person(std::string first,
		std::string last,
		int arbitrary);
	~Person();
	std::string GetName();
	int GetNumber() {return arbitrarynumber;}
	void SetNumber(int number) {arbitrarynumber = number;}
	bool operator<(Person const& p) const;
	bool operator<(int i) const;
	friend bool operator<(int i, Person const& p);
};
bool operator<(int i, Person& p);
