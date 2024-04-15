import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int M = scanner.nextInt();
        int N = scanner.nextInt();

        if(N>=M) {
            System.out.println(2*M-2);
        } else {
            System.out.println(2*N-1);
        }

        scanner.close();
    }
}