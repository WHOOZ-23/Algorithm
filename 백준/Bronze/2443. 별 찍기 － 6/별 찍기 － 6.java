import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();

        for(int i=N; i>=1; i--) {
            for(int j=N-i; j>0; j--) {
                System.out.print(" ");
            }

            for(int k=(2*i-1); k>0; k--) {
                System.out.print("*");
            }

            System.out.println();
        }

        scanner.close();
    }
}