import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        while(true) {
            int[] arr = new int[3];

            for(int i=0; i<arr.length; i++) {
                arr[i] = scanner.nextInt();
            }

            Arrays.sort(arr);

            if(arr[0]==0 && arr[1]==0 && arr[2]==0) break;

            if((int)Math.pow(arr[2], 2) == (int)Math.pow(arr[0], 2) + (int)Math.pow(arr[1], 2)) {
                sb.append("right").append("\n");
            } else {
                sb.append("wrong").append("\n");
            }
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}