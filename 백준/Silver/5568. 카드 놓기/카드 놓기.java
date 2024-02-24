import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static int n, k;
    public static int[] cards;
    public static boolean[] choice;
    public static Set<String> sg = new HashSet<>();

    public static void make(int index, String str) {
        if(index==0) {
            sg.add(str);
            return;
        }

        for(int i=0; i<n; i++) {
            if(!choice[i]) {
                choice[i] = true;
                make(index-1, str+Integer.toString(cards[i]));

                choice[i] = false;
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        n = scanner.nextInt();
        k = scanner.nextInt();
        cards = new int[n];
        choice = new boolean[n];

        for(int i=0; i<n; i++) {
            cards[i] = scanner.nextInt();
        }

        make(k, "");

        System.out.println(sg.size());

        scanner.close();
    }
}