import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sum = 0;

        for(int i=0; i<5; i++) {
            int score = scanner.nextInt();

            if(score < 40) {
                score = 40;
            }

            sum += score;
        }

        System.out.println(sum/5);

        scanner.close();
    }
}