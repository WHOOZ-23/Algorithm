import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.next();
        int[] arr = new int[26];

        for(int i=0; i<str.length(); i++) {
            arr[str.charAt(i)-97]++;
        }

        for(int a:arr) {
            System.out.print(a + " ");
        }

        scanner.close();
    }
}