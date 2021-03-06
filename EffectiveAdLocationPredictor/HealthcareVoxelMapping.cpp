/*
	Author: Thomas Woods
	Program: Mecklenburg County Health Outcomes Trend Mapping
	Date: March 22, 2019
	Purpose: Use voxel mapping to identify trends that correlate to spikes in health events, per location
*/

#include "heuristics.h"
#include "stdafx.h"
#include <fstream>


int zipArrayIndex(int zip)
{
	switch(zip)
	{
		case 28206:
			return 0;
		case 28214:
			return 1;
		case 28212:
			return 2;
		case 28205:
			return 3;
		case 28208:
			return 4;
		case 28216:
			return 5;
		case 28215:
			return 6;
		case 28269:
			return 7;
		case 28217:
			return 8;
		case 28213:
			return 9;
		case 28210:
			return 10;
		case 28227:
			return 11;
		case 28262:
			return 12;
		case 28273:
			return 13;
		case 28211:
			return 14;
		case 28105:
			return 15;
		case 28209:
			return 16;
		case 28202:
			return 17;
		case 28278:
			return 18;
		case 28203:
			return 19;
		case 28277:
			return 20;
		case 28226:
			return 21;
		case 28204:
			return 22;
		case 28270:
			return 23;
		case 28078:
			return 24;
		case 28134:
			return 25;
		case 28031:
			return 26;
		case 28207:
			return 27;
		case 28036:
			return 28;
		default:
			return -1;
	}
}

int main()
{
	int values[29];

	ofstream inFile;
	inFile.open("puttheCSVfilehere.csv");
	

    return 0;
}

