// FreeStore.cpp : Defines the entry point for the console application.
//

#include "Resource.h"
#include <string>
using std::string;

int main()
{
	{
		Resource localResource ("local");
		string localString = localResource.GetName();
	}
	Resource* pResource = new Resource("created with new");
	string newString = pResource->GetName();
	int j =3;
	if (j == 3)
	{
		return 0;
	}

	Resource* p2 = pResource;

	delete pResource;
	pResource = nullptr;
	//string string2 = p2->GetName();
	delete pResource;
	delete p2;

	//string string3 = pResource->GetName();

	return 0;
}

