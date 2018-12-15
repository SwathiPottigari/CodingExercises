public class Solution {
    public int[] TwoSum(int[] nums, int target) {
      
		int a=0;
        int b=0;
		
		for(int i =0;i< nums.Length;i++)
		{
			for(int j=1+i;j<nums.Length;j++)
			{
				if(nums[i]+nums[j]==target)
				{
					a=i;
					b=j;
				}
			}
		}
        int[] userArray = new int[] {a,b}; 
        
			return userArray;
        
    }
}