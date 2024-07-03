import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int money = 1000 - scanner.nextInt();

        int cnt = 0;

        while(0 < money) {
            if(500 <= money) {
                cnt += money / 500;
                money %= 500;
            } else if(100 <= money && money < 500) {
                cnt += money / 100;
                money %= 100;
            } else if(50 <= money && money < 100) {
                cnt += money / 50;
                money %= 50;
            } else if(10 <= money && money < 50) {
                cnt += money / 10;
                money %= 10;
            } else if(5 <= money && money < 10) {
                cnt += money / 5;
                money %= 5;
            } else {
                cnt += money;
                money %= 1;
            }
        }

        System.out.println(cnt);

        scanner.close();
    }
}