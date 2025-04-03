import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int hours = sc.nextInt();
        int minutes = sc.nextInt();
        int seconds = sc.nextInt();
        int times = sc.nextInt();

        while(0 < times) {
            if(3600 <= times) {
                hours += times/3600;
                times %= 3600;
            } else if(60 <= times) {
                minutes += times/60;
                times %= 60;
            } else {
                seconds += times;
                times = 0;
            }
        }

        if(60 <= seconds) {
            minutes += seconds/60;
            seconds %= 60;
        }

        if(60 <= minutes) {
            hours += minutes/60;
            minutes %= 60;
        }

        if(24 <= hours) {
            hours %= 24;
        }

        System.out.printf("%d %d %d", hours, minutes, seconds);

        sc.close();
    }
}