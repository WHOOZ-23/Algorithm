import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();


        while(true) {
            int A = scanner.nextInt();
            int B = scanner.nextInt();

            if(A==0 && B==0) break;

            if(A>B) {
                sb.append("Yes").append("\n");
            } else {
                sb.append("No").append("\n");
            }
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}