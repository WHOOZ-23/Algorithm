import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        
        int agree = 0;
        int disagree = 0;

        for(int i=0; i<N; i++) {
            int opinion = sc.nextInt();

            if(opinion == 1) {
                agree++;
            } else {
                disagree++;
            }
        }

        System.out.println(disagree < agree ? "Junhee is cute!" : "Junhee is not cute!");

        sc.close();
    }
}