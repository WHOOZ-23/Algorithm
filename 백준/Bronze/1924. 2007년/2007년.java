import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] date = scanner.nextLine().split(" ");
        int month = Integer.parseInt(date[0]);
        int day = Integer.parseInt(date[1]);

        String[] date2 = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
        int day2 = 0;

        switch (month) {
            case 1 :
                day2 = day % 7;
                break;
            case 2 :
                day2 = (day + 31) % 7;
                break;
            case 3, 4 :
                day2 = (day + 31*(month/2) + 28) % 7;
                break;
            case 5, 6, 7, 8, 10, 12 :
                day2 = (day + 31*(month/2) + 28 + 30*((month-3)/2)) % 7;
                break;
            case 9, 11 :
                day2 = (day + 31*(month/2+1) + 28 + 30*((month-4)/2)) % 7;
                break;
        }

        System.out.println(date2[day2]);

        scanner.close();
    }
}