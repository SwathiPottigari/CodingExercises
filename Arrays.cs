//This solution uses Arrays concept
using System;
using System.Collections.Generic;

public class ArtistSalesData
{
    public string Artist {get;set;}
	public double Sales {get;set;}
}

public class Program
{
	public static void Main()
	{
		
		Program p=new Program();
		double sd=p.Salesdata("Amanda");
		Console.WriteLine(sd);
	}
	
	public double Salesdata(string Name)
{
		double sales=0;
		
	ArtistSalesData[] sd=new ArtistSalesData[50];
	sd[0]=new ArtistSalesData();
	sd[0].Artist="Amanda";
	sd[0].Sales=34.3;
	sd[1]=new ArtistSalesData();
	sd[1].Artist="Bosh";
	sd[1].Sales=39.3;
	sd[2]=new ArtistSalesData();
	sd[2].Artist="Christine";
	sd[2].Sales=60;
	
		
		foreach( ArtistSalesData ad in sd)
		{
			if(ad==null) continue;
			if(ad.Artist==Name)
			{
			  	sales=ad.Sales;
			}
			
		}
		 return sales;
	
}
}



