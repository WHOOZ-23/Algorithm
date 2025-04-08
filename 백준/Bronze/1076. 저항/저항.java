import java.util.*;

public class Main {
    static long RESIST;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        String result = "";

        for(int i=0; i<3; i++) {
            String color = sc.nextLine();

            resistance(color, i);

            if(i<2) {
                result += RESIST;
            } else {
                sb.append(Integer.parseInt(result) * RESIST);
            }

        }

        System.out.println(sb);

        sc.close();
    }

    public static void resistance(String color, int num) {
        if(num < 2) {
           switch(color) {
               case "black":
                   RESIST = 0;
                   break;
               case "brown":
                   RESIST = 1;
                   break;
               case "red":
                   RESIST = 2;
                   break;
               case "orange":
                   RESIST = 3;
                   break;
               case "yellow":
                   RESIST = 4;
                   break;
               case "green":
                   RESIST = 5;
                   break;
               case "blue":
                   RESIST = 6;
                   break;
               case "violet":
                   RESIST = 7;
                   break;
               case "grey":
                   RESIST = 8;
                   break;
               case "white":
                   RESIST = 9;
                   break;
           }
        } else {
            switch(color) {
                case "black":
                    RESIST = 1;
                    break;
                case "brown":
                    RESIST = 10;
                    break;
                case "red":
                    RESIST = (long) Math.pow(10, 2);
                    break;
                case "orange":
                    RESIST = (long) Math.pow(10, 3);
                    break;
                case "yellow":
                    RESIST = (long) Math.pow(10, 4);
                    break;
                case "green":
                    RESIST = (long) Math.pow(10, 5);
                    break;
                case "blue":
                    RESIST = (long) Math.pow(10, 6);
                    break;
                case "violet":
                    RESIST = (long) Math.pow(10, 7);
                    break;
                case "grey":
                    RESIST = (long) Math.pow(10, 8);
                    break;
                case "white":
                    RESIST = (long) Math.pow(10, 9);
                    break;
            }
        }
    }
}