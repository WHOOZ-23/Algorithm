import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        StringBuilder sb = new StringBuilder();

        while(true) {
            String line = sc.nextLine();

            if(line.equals("0")) break;

            int N = Integer.parseInt(line.split(" ")[0]);
            int P = Integer.parseInt(line.split(" ")[1]);
            int[] pages;
            int other = N+1-P;
            int first = Math.min(P, other);

            if(first % 2 == 1) {
                pages = new int[] {first, first+1, N-first, N+1-first};
            } else {
                pages = new int[] {first-1, first, N+1-first, N+2-first};
            }

            for(int p : pages) {
                if(p != P) {
                    sb.append(p).append(" ");
                }
            }

            sb.append("\n");
        }

        System.out.println(sb);

        sc.close();
    }
}