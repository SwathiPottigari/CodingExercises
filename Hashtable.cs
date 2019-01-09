//This solution uses HashTable concept--Difference between Arrays and Hashtable

using System;
using System.Collections;

public class ArtistSalesData
{
	public string Artist{get;set;}
	public double Sales{get;set;}
}
public class Program
{
	
	public static void Main()
	{
		Program p=new Program();
		Console.WriteLine(p.Sales("Christine"));
	}
	
	public double Sales(string Name)
	{
		double sales=0;
		
		Hashtable ht=new Hashtable();
		ht.Add("Amanda",24.5);
		ht.Add("Bosh",50);
		ht.Add("Christine",80);		
		sales=Convert.ToDouble( ht[Name]);
		return sales;
	}
}