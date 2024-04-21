import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int T = scanner.nextInt();

        for(int i=0; i<T; i++) {
            String answer = scanner.next();
            int score = 0;
            int bonus = 0;

            for(int j=0; j<answer.length(); j++) {
                if(answer.charAt(j)=='O') {
                    score++;
                    if(j!=0 && answer.charAt(j-1)=='O') {
                        bonus++;
                    } else {
                        bonus = 0;
                    }
                    score += bonus;
                }
            }

            sb.append(score).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}