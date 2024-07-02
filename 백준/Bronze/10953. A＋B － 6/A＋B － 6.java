import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int t = scanner.nextInt();

        for(int i=0; i<t; i++) {
            String[] arr = scanner.next().split(",");
            sb.append(Integer.parseInt(arr[0]) + Integer.parseInt(arr[1])).append("\n");
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}