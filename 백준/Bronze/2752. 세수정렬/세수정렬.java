import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        StringBuilder sb = new StringBuilder();
        int[] arr = new int[3];

        for(int i=0; i<3; i++) {
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr);

        for(int a : arr) {
            sb.append(a).append(" ");
        }

        System.out.println(sb);

        sc.close();
    }
}