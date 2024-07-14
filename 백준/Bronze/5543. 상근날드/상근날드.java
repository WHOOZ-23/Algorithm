import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int burger = 2000;

        for(int i=0; i<3; i++) {
            int cost1 = scanner.nextInt();

            burger = Math.min(burger, cost1);
        }

        int drink = 2000;

        for(int j=0; j<2; j++) {
            int cost2 = scanner.nextInt();

            drink = Math.min(drink, cost2);
        }

        System.out.println(burger + drink - 50);

        scanner.close();
    }
}