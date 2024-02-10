import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int[] coord1 = new int[N];
		int[] coord2 = new int[N];
		Map<Integer, Integer> coordMap = new HashMap<>();
		StringBuilder sb = new StringBuilder();
		
		for(int i=0; i<N; i++) {
			coord1[i] = scanner.nextInt();
			coord2[i] = coord1[i];
		}
		
		Arrays.sort(coord2);
		
		int v = 0;
		
		for(int c:coord2) {
			if(!coordMap.containsKey(c)) {
				coordMap.put(c, v);
				v++;
			}
		}
		
		for(int c:coord1) {
			sb.append(coordMap.get(c) + " ");
		}
		
		System.out.println(sb);
		
		scanner.close();
	}
}