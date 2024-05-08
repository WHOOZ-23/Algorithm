import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.next();
        String result = "";

        for(int i=0; i<str.length(); i++) {
            result += str.charAt(i);
            if(i%10==9) {
                result += "\n";
            }
        }

        System.out.println(result);

        scanner.close();
    }
}