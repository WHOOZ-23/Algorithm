import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String plates = sc.nextLine();
        int height = 0;

        for(int i=0; i<plates.length(); i++) {
            if(0<i && plates.charAt(i-1) == plates.charAt(i)) {
                height += 5;
            } else {
                height += 10;
            }
        }

        System.out.println(height);

        sc.close();
    }
}