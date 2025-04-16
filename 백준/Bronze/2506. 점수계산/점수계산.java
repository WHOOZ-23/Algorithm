import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int score = 0;
        int check = 0;
        int sum = 0;

        for(int i=0; i<N; i++) {
            int grade = sc.nextInt();

            if(check == 1 && grade == 1) {
                sum++;
            } else {
                sum = 0;
            }

            score += sum + grade;

            check = grade;
        }

        System.out.println(score);

        sc.close();
    }
}