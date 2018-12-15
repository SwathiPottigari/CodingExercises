public class Solution {
    public void MergeSortedArrays(int[] nums1, int m, int[] nums2, int n) {       
		
	    for(int i=nums1.Length-1;i>=0;i--)
	    {
		    if(m>0 && n>0)
		    {
			if(nums1[m-1]<nums2[n-1])
			{
            
				nums1[i]=nums2[n-1];
				n--;
			}
			else if (nums1[m-1]>=nums2[n-1])
			{
                 
				nums1[i]=nums1[m-1];
				m--;
			}
            }
            else{
             if(n==0 && m>=1 )
             {
                 nums1[i]=nums1[m-1];
                 m--;
             }
            if(m==0 && n>=1 )
             {
                 nums1[i]=nums2[n-1];
                 n--;
             }
            }
		}
             
    }
}
