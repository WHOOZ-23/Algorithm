import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        String str = scanner.next();

        for(int i=0; i<str.length(); i++) {
            if(65<=str.charAt(i) && str.charAt(i)<=90) {
                sb.append((char) (str.charAt(i)+32));
            } else {
                sb.append((char) (str.charAt(i)-32));
            }
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}