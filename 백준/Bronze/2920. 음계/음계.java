import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] arr = new int[8];

        for(int i=0; i<8; i++) {
            arr[i] = scanner.nextInt();
        }

        String str = "";

        for(int j=0; j<7; j++) {
            if(arr[j]+1 == arr[j+1]) {
                str = "ascending";
            } else if(arr[j]-1 == arr[j+1]) {
                str = "descending";
            } else {
                str = "mixed";
                break;
            }
        }

        System.out.println(str);

        scanner.close();
    }
}