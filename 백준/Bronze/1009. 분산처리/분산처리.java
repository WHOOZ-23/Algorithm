import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int t = scanner.nextInt();

        for(int i=0; i<t; i++) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            int result = 1;

            for(int j=0; j<b; j++) {
                result = (result * a) % 10;
            }

            if(result == 0) result = 10;

            sb.append(result).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}