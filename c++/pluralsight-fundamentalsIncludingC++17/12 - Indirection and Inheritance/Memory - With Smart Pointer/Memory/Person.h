#pragma once
#include <string>

#include "Resource.h"
#include <memory>

class Person
{
private:
	std::string firstname;
	std::string lastname;
	int arbitrarynumber;
	std::shared_ptr<Resource> pResource;

public:
	Person(std::string first,
		std::string last,
		int arbitrary);

	std::string GetName() const;
	int GetNumber() const {return arbitrarynumber;}
	void SetNumber(int number) {arbitrarynumber = number;}
	void SetFirstName(std::string first) {firstname = first;}
	void AddResource();
	std::string GetResourceName() const { return pResource ? pResource->GetName() : ""; }
};
