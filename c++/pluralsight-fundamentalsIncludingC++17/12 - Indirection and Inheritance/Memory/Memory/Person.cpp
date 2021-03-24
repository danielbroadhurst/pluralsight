
#include "Person.h"

using namespace std;

Person::Person(string first,string last,
	int arbitrary) : firstname(first),lastname(last),
	arbitrarynumber(arbitrary), pResource(nullptr)
{
}

Person::~Person()
{
	delete pResource;
}

string Person::GetName() const
{
	return firstname + " " + lastname;
}


void Person::AddResource()
{
	delete pResource;
	pResource=new Resource("Resource for " + GetName());
}

Person::Person(Person const & p)
{
	pResource = new Resource(p.pResource->GetName());
}

Person& Person::operator=(const Person& p)
{
	delete pResource;
	pResource = new Resource(p.pResource->GetName());
	return *this;
}

