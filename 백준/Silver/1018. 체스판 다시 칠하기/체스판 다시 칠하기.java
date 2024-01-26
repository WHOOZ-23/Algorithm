import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int N = scanner.nextInt();
		int M = scanner.nextInt();
		char[][] board = new char[N][M];
		ArrayList<Integer> cnt = new ArrayList<>();
		
		for(int i=0; i<N; i++) {
			String str = scanner.next();
			for(int j=0; j<M; j++) {
				board[i][j] = str.charAt(j);
			}
		}
		
		for(int i=0; i<N-7; i++) {
			for(int j=0; j<M-7; j++) {
				int cnt1 = 0;
				int cnt2 = 0;
				
				for(int k=i; k<8+i; k++) {
					for(int l=j; l<8+j; l++) {
						if((k+l)%2==0) {
							if(board[k][l] != 'B') cnt1 += 1;
							if(board[k][l] != 'W') cnt2 += 1;							
						} else {
							if(board[k][l] != 'W') cnt1 += 1;
							if(board[k][l] != 'B') cnt2 += 1;							
						}
					}
				}
				cnt.add(Math.min(cnt1, cnt2));
			}
		}
		Integer[] cntArray = cnt.toArray(new Integer[cnt.size()]);
		Arrays.sort(cntArray);
		
		System.out.println(cntArray[0]);
		
		scanner.close();
	}
}