import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();
        int breakEvenPoint = 0;
        
        breakEvenPoint = B < C ? A/(C-B) + 1 : -1;

        System.out.println(breakEvenPoint);

        sc.close();
    }
}