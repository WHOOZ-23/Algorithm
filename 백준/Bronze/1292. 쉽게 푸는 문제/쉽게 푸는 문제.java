import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> list = new ArrayList<>();

        int A = sc.nextInt();
        int B = sc.nextInt();

        for(int i=1; i<=B; i++) {
            for(int j=0; j<i; j++) {
                list.add(i);
            }
        }

        Integer[] arr = list.toArray(new Integer[0]);
        
        int sum = 0;

        for(int k=A-1; k<B; k++) {
            sum += arr[k];
        }

        System.out.println(sum);

        sc.close();
    }
}