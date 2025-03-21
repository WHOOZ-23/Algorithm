import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int C = sc.nextInt();

        for(int i=0; i<C; i++) {
            int N = sc.nextInt();
            int[] students = new int[N];
            double sum = 0;
            double avg = 0;

            for(int j=0; j<N; j++) {
                students[j] = sc.nextInt();
                sum += students[j];
            }

            avg = sum / N;

            int cnt = 0;

            for(int s : students) {
                if(avg < s) {
                    cnt++;
                }
            }

            sb.append(String.format("%.3f%%", (double) cnt/N * 100)).append("\n");
        }

        System.out.println(sb);

        sc.close();
    }
}