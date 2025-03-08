import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        char[] arr = {'S', 'U', 'O'};

        System.out.println(arr[n%3]);

        sc.close();
    }
}