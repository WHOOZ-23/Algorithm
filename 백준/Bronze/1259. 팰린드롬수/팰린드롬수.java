import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        while(true) {
            String str1 = scanner.nextLine();
            String str2 = "";

            if(str1.equals("0")) break;

            for(int i=str1.length()-1; 0<=i; i--) {
                str2 += str1.charAt(i);
            }

            if(str1.equals(str2)) {
                sb.append("yes").append("\n");
            } else {
                sb.append("no").append("\n");
            }
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}