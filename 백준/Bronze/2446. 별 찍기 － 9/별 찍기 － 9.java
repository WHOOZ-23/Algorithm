import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();

        for(int i=N; i>=1; i--) {
            for(int j=N-i; j>=1; j--) {
                System.out.print(" ");
            }
            for(int k=2*i-1; k>=1; k--) {
                System.out.print("*");
            }
            System.out.println();
        }

        for(int i=1; i<N; i++) {
            for(int j=i+1; j<N; j++) {
                System.out.print(" ");
            }
            for(int k=1; k<=2*i+1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }

        scanner.close();
    }
}