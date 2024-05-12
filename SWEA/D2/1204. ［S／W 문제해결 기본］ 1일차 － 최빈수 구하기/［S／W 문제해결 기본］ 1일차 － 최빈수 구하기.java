import java.util.*;
import java.io.*;

public class Solution {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		
		for(int i=0; i<T; i++) {
			int t = Integer.parseInt(br.readLine());
			int[] arr = new int[101];
			
			StringTokenizer st = new StringTokenizer(br.readLine());
			
			for(int j=0; j<1000; j++) {
				arr[Integer.parseInt(st.nextToken())]++;
			}
			
			int max = 0;
			int cnt = 0;
			
			for(int k=0; k<arr.length; k++) {
				if(max <= arr[k]) {
					max = arr[k];
					cnt = k;
				}
			}
			
			sb.append("#").append(t).append(" ").append(cnt).append("\n");
		}
		
		System.out.println(sb.toString());
	}

}